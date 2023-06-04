import React, { Component } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import io from 'socket.io-client';

class ChatWithCus extends Component {
    constructor(props) {
        super(props);

        this.state = {
            socket: null,
            chatId: '',
            messages: [],
            newMessage: '',
        };
    }

    componentDidMount() {
        // Thay vì kết nối tới server socket.io, bạn sẽ gửi yêu cầu POST để bắt đầu phiên chat và nhận chatId từ API
        fetch('http://192.168.101.30:3000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        })
            .then((response) => response.json())
            .then((data) => {
                const { chatId } = data;

                // Lưu chatId vào state
                this.setState({ chatId });

                // Kết nối tới server socket.io
                const socket = io('http://192.168.101.30:3000');
                this.setState({ socket });

                // Lắng nghe sự kiện nhận tin nhắn mới
                socket.on('new-message', this.handleNewMessage);

                // Lấy tin nhắn trước đó từ server
                socket.on('previous-messages', this.handlePreviousMessages);

                // Tham gia vào phiên chat sau khi nhận được chatId từ API
                this.joinChat();
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }


    componentWillUnmount() {
        // Ngắt kết nối socket khi component unmount
        const { socket } = this.state;
        if (socket) {
            socket.disconnect();
        }
    }

    handleNewMessage = (message) => {
        this.setState((prevState) => ({
            messages: [...prevState.messages, message],
        }));
    };

    handlePreviousMessages = (previousMessages) => {
        this.setState({ messages: previousMessages }, () => {
          this.joinChat(); // Tham gia vào phiên chat sau khi cập nhật tin nhắn trước đó
        });
      };      

    joinChat = () => {
        const { socket, chatId } = this.state;
        // Gửi yêu cầu tham gia vào phiên chat
        socket.emit('join-chat', chatId);
    };

    sendMessage = () => {
        const { socket, newMessage } = this.state;
        // Gửi tin nhắn tới server
        socket.emit('send-message', newMessage);
        this.setState({ newMessage: '' });
    };

    render() {
        const { chatId, messages, newMessage } = this.state;

        return (
            <View>
                <Text>Chat ID: {chatId}</Text>
                <TextInput value={chatId} onChangeText={(text) => this.setState({ chatId: text })} />

                <Button title="Join Chat" onPress={this.joinChat} />

                <TextInput style={{ borderWidth: 1, margin: 20 }} value={newMessage} onChangeText={(text) => this.setState({ newMessage: text })} />

                <Button title="Send Message" onPress={this.sendMessage} />

                <FlatList
                    data={messages}
                    renderItem={({ item }) => <Text>{item}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

export default ChatWithCus;

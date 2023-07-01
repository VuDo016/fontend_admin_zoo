import React, { Component } from 'react';
import { View, Text } from 'react-native';
import WebView from 'react-native-webview';

import { updateBillCancel } from '../../../../api/service/ticket';

export default class RefundVNpay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refundMessage: ''
    };
  }

  handleNavigationStateChange = async (navState) => {
    const id = this.props.route.params.id;
    const url = navState.url;
    if (url === 'http://54.254.72.36:3000/api/payment/refund') {
      await updateBillCancel(id)
      this.props.navigation.navigate('ChatWithCus')
      alert('Hoàn tiền cho khách hàng thành công')
    }
  };

  render() {
    const codeBill = this.props.route.params.codeBill;
    const priceDiscount = this.props.route.params.price;

    const url = 'http://54.254.72.36:3000/api/payment/refund?price=' + priceDiscount + '&codeBill=' + codeBill;

    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: url }}
          onNavigationStateChange={this.handleNavigationStateChange}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={true}
        />
        {this.state.refundMessage !== '' && <Text>{this.state.refundMessage}</Text>}
      </View>
    );
  }
}

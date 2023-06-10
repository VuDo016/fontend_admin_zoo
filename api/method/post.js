import { https } from "../http/http";

export const post = async (bodyData, url, data, token) => {
    const response = await fetch(https + url,
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json; charset=utf-8', 'Authorization': token },
            body: JSON.stringify(bodyData),
        })
    const resJson = await response.json();
    return resJson[data]
}

export const uploadImage = async (imageUris, url, type, value, token) => {
    try {
        const apiUrl = `${https}${url}/${type}/${value}`;

        const formData = new FormData();

        imageUris.forEach((imageUri, index) => {
            const extension = imageUri.split('.').pop();

            formData.append("images", {
                uri: imageUri,
                type: `image/${extension}`,
                name: `image_${index}.${extension}`
            });
        });

        const response = await fetch(apiUrl, {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'multipart/form-data', 'Authorization': token
            },
        });

        if (response.ok) {
            console.log('Upload success!');
        } else {
            console.log('Upload failed!');
        }
    } catch (error) {
        console.error(error);
    }
};
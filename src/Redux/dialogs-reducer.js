const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messagesData: [
      { id: 0, message: 'Hi' },
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How is your dog?' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'Hello' },
      { id: 5, message: 'Bye' },
      { id: 6, message: 'QQ' },
    ],

    dialogsData: [
      { id: 1, name: 'Andrii', ava: 'https://www.meme-arsenal.com/memes/3f92fd0b18d24a38a63eceec4fca4762.jpg' },
      { id: 2, name: 'Dima', ava: 'https://i.imgur.com/AVaPsiy.jpg' },
      { id: 3, name: 'Marik', ava: 'https://otkritkis.ru/wp-content/uploads/2021/10/ava-94.jpg' },
      { id: 4, name: 'Vova', ava: 'https://avatarfiles.alphacoders.com/968/thumb-96848.png' },
      { id: 5, name: 'Roman', ava: 'https://avatarfiles.alphacoders.com/633/thumb-63329.png' },
      { id: 6, name: 'Bohdan', ava: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-75-300x300.jpg' },
    ],
  };

 const dialogsReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_MESSAGE: {
                let newMessage = {
                    id: state.messagesData.length + 1,
                    message: action.newMessageBody,
                };
                return {
                  ...state,
                  messagesData: [...state.messagesData, newMessage]
                };

              }
            default:
                return state
        }
    
}

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody})

export default dialogsReducer;
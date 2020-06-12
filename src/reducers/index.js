const initialState= {
  books: [
    {
      key: "1",
      coverURL: "https://m.media-amazon.com/images/I/51K8TZ2swJL.jpg",
      name: "Hideaway",
      author: "Nora Roberts",
      mode: "want"
    },
    {
      key: "2",
      coverURL: "https://images-na.ssl-images-amazon.com/images/I/414JfiBCutL._SX327_BO1,204,203,200_.jpg",
      name: "Becoming",
      author: "Michelle Obama",
      mode: "current"
    },
    {
      key: "3",
      coverURL: "https://images-na.ssl-images-amazon.com/images/I/51EJnli5S2L._SX327_BO1,204,203,200_.jpg",
      name: "The Guest List: A Novel",
      author: "Lucy Foley",
      mode: "read"
    },
    {
      key: "4",
      coverURL: "https://images-na.ssl-images-amazon.com/images/I/41eOX0cBT8L._SX331_BO1,204,203,200_.jpg",
      name: "Milkman",
      author: "Anna Burns",
      mode: "remove"
    },
    {
      key: "5",
      coverURL: "https://images-na.ssl-images-amazon.com/images/I/51NLFKhZnIL._SX327_BO1,204,203,200_.jpg",
      name: "Feel Free",
      author: "Zadie Smith",
      mode: "remove"
    },
    {
      key: "6",
      coverURL: "https://images-na.ssl-images-amazon.com/images/I/51YSa++zrcL._SX327_BO1,204,203,200_.jpg",
      name: "Flash: The Making of Weegee the Famous",
      author: "Christopher Bonanos",
      mode: "remove"
    }
  ]
}
function books(state=initialState, action){
    switch(action.type)
    {
        case 'MODIFY_MODE':
          console.log(action.mode)
          return {
            ...state,
            books: state.books.map(book=> book.key===action.book.key? {...book, mode: action.mode}: book)
          }

        default: 
          return state;
    }
}
export default books;
export default (state = [], action) => {

    
    
    switch (action.type) {
      case "ADD_QUOTE":
        return [...state, action.quote]
        
      case "REMOVE_QUOTE":
     
        return state.filter(quote => quote.id !== action.quoteId)

      case "UPVOTE_QUOTE":
        let q = state.find(quote => quote.id === action.quoteId)
        q.votes ++
        return state

      case "DOWNVOTE_QUOTE":
       q = state.find(quote => quote.id === action.quoteId)
      
        q.votes > 0 ? q.votes-- : q.votes
        return state
    
    
      default:
        return state;
      }
  }
  
  

const divOrMulNumber = (state = 1,action) =>{
    switch(action.type){
        case 'DIVISION':
            return state/5;
        
        case 'MULTIPLICATION':
            return state*5;
        
        default:
            return state;

    }
}

export default divOrMulNumber
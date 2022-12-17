import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber,divNumber,mulNumber } from "./actions";
const App = () => {
   const state1 = useSelector((state) => state.changeNumber);
   const state2 = useSelector(state=>state.divOrMulNumber);
   const dispatch = useDispatch();
   return (
      <div className="main_div">
         <div className="child_div">
            <p onClick={() => dispatch(decNumber())}>-</p>
            <p>{state1}</p>
            <p onClick={() => dispatch(incNumber())}>+</p>
         </div>

         <div className="child_div">
            <p onClick={() => dispatch(divNumber())}> / </p>
            <p>{state2}</p>
            <p onClick={() => dispatch(mulNumber())}> * </p>
         </div>
      </div>

      
   );
};

export default App;

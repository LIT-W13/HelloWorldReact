import { reverseStr } from "../toplevel";
function fancyLog(str){
    console.log(`***${reverseStr(str.toString())}***`);
}

export default fancyLog;

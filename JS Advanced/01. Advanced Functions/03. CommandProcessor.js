function manipulator(){
    let string = '';

    function append(param){
        string += param;
    }

    function removeStart (param){
        string = string.slice(param);
    }

    function removeEnd(param){
        string = string.slice(0, string.length - param);
    }

    function print(){
        console.log(string);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    };
}
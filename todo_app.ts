import inquirer from "inquirer"
let todos: string[] =[];
let loop = true;

while(loop){

    const answers : {
        todo: string,
        addMore: boolean,

    } =await inquirer.prompt([
        {
            type:"input",
            name: "todo",
            message:"Whats your plan todo?"
        },
        {
            type:"confirm",
            name:"addMore",
            message:"Do you want add more in your to do?"


        }
    ]);
 const {todo , addMore} = answers;

 loop = addMore;
 if(todo){
    todos.push(todo);
 }
else{
    console.log("kindly add valid input");
}
}
    if (todos.length > 0){
        console.log("your to do list is:");
        todos.forEach( todo => {
            console.log(todo);
        });
    }
        else{

            console.log("No todos found");
        }
    

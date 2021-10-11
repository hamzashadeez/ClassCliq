let questionType = 'essay';

document.getElementById('essay').addEventListener('change', (e)=>{
    questionType = 'essay';
})

document.getElementById('exampleRadios2').addEventListener('change', (e)=>{
    questionType = 'objectives'
})

const addQuestion = (type)=>{

}



document.getElementById("done").addEventListener("click", ()=>{
    addQuestion(questionType)
})

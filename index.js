// function that takes one parameter.
function introduction(name) {
    return `Hi, my name is ${name}.`;
}
introduction("Aki");
console.log(introduction("Aki"));

function introductionWithLanguage(name,language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguage("Oscar","Kiswahili");
console.log(introductionWithLanguage("Oscar","Kiswahili"));

//introductionWithLanguageOptional
function introductionWithLanguageOptional(name, language="JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.` 
}
console.log(introductionWithLanguageOptional("Oscar"));

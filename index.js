const user = ["Akie", "Samip", "Grace"];
//console.log(user[0]);

//const user1 = "Aki";
//const user2 = "Samip";
//const user3 = "Gracie";

const language = ["Ember.js", "React", "JavaScript", "Python"];
//console.log(language[3]);

introduction(user[0]);
// test
console.log(introduction(user[0]));

function introduction(name) {
    return `Hi, my name is ${name}.`;
}


//test
console.log(introductionWithLanguage(user[1], language[1]));

introductionWithLanguage(user[1], language[1]);

function introductionWithLanguage(name, compLang) {
    return `Hi, my name is ${name} and I am learning to program in ${compLang}.`;
}


console.log(introductionWithLanguageOptional(user[2], language[i]);

introductionWithLanguageOptional(user[2], language[i]);

function introductionWithLanguageOptional(name, compLang = "JavaScript") {
    return `Hi, my name is ${name}, and I am learning to program in ${compLang}.`;
}
*/
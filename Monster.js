// function label(labelTag,labelType,labelType_Name,label_Inner){
//     var lb = document.createElement(labelTag);
//     lb.setAttribute(labelType,labelType_Name);
//     lb.innerHTML = label_Inner;
//     return lb;
// }

// function break_ts(bre){
//     var br = document.createElement(bre);
//     return br;
// }

// function input(inputTag,inputType,inputType_Name,inputId,inputId_Name){
//     var inp = document.createElement(inputTag);
//     inp.setAttribute(inputType,inputType_Name);
//     inp.setAttribute(inputId,inputId_Name);
//     return inp;
// }

// var label = label("label","for","email","Email");
// var input = input("input","type","email","id","email");
// var break_ts = break_ts("br");

// document.body.append(label,break_ts,input);

function label(labelTag,labelType,labelType_Name,label_Inner){
    var lb = document.createElement(labelTag);
    lb.setAttribute(labelType,labelType_Name);
    lb.innerHTML = label_Inner;
    return lb;
}
function input(tag_Name,nameType,nameType_value,nameId,nameId_value){
    var name = document.createElement(tag_Name);
    name.setAttribute(nameType,nameType_value);
    name.setAttribute(nameId,nameId_value);
    return name;
}
function break_ts(bre){
    var br = document.createElement(bre);
    return br;
}

// function form(formTag,lf,f,ll,l,lm,m,le,e,lp,p,lpn,pn,b){
//     var form = createElement(formTag);
//     form.append(lf,f,ll,l,lm,m,le,e,lp,p,lpn,pn,b)
// }
var label_firstName = label("label","for","firstName","firstName");
var firstName = input("input","type","text","id","firstName");
var label_lastName = label("label","for","lastName","lastName");
var lastName = input("input","type","text","id","lastName");
var label_middleName = label("label","for","middleName","middleName");
var middleName = input("input","type","text","id","middleName");
var label_Email = label("label","for","email","Email");
var email = input("input","type","email","id","email");
var label_password = label("label","for","password","password");
var password = input("input","type","password","id","password");
var label_phoneNumber = label("label","for","phoneNumber","Phone Number");
var phoneNumber = input("input","type","text","id","phoneNumber");
var break_ts_1 = break_ts("br");
var break_ts_2 = break_ts("br");
var break_ts_3 = break_ts("br");
var break_ts_4 = break_ts("br");
var break_ts_5 = break_ts("br");
var break_ts_6 = break_ts("br");
var break_ts_7 = break_ts("br");
var break_ts_8 = break_ts("br");
var break_ts_9 = break_ts("br");
var break_ts_10 = break_ts("br");
var break_ts_11 = break_ts("br");


document.body.append(
    label_firstName,break_ts_1,firstName,
    break_ts_2,label_lastName,break_ts_3,lastName,break_ts_4,
    label_middleName,break_ts_5,middleName,break_ts_6,label_Email,
    break_ts_7,email,break_ts_8,label_password,break_ts_9,password,break_ts_10,
    label_phoneNumber,break_ts_11,phoneNumber
)



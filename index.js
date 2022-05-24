//alert("linked?")





// Requirements:
//     Your code shall be pushed to GitHub under the York organization
// The repository shall be named ‘<first_name>-<last_name>-jsproj2’
//     i.e. Tom Cruise’s repository will be named ‘tom-cruise-jsproj2’
//     The project shall be written entirely in HTML, JavaScript and CSS.
//     All functions written by you shall be divided into 3 categories:
//     With Side Effects
//     Without Side Effects
//     Testing
//     Functions with side effects shall have minimal to no logic
//     Functions without side effects shall have all code paths tested with a testing function
//     Testing functions shall…
//     not take any arguments
//     not return any values
//     run only once
//     run without user interaction
//     contain all output to the console - pass or fail
//     not interact with any html elements


async function funFetch(url, _fetch = fetch){
    try {
        const response = await _fetch(url);
        if (!response.ok){
            return `response not ok`
        }
        const json = await response.json();
        return json;
    }catch (error){
        return `response not found`
    }
}
async function test_funFetch_not_ok() {
    // arrange
    const expected = 'response not ok'
    const _fetch = async () => {
        return {
            ok: false
        }
    }

    // act
    const result = await funFetch('', _fetch)

    // assert
    if (result !== expected) {
        console.log('test_funFetch_not_ok - failed')
    } else {
        console.log('test_funFetch_not_ok - passed')
    }
}
test_funFetch_not_ok()

async function test_funFetch_ok(){
    // arrange
    const expected = 'response not ok'
    const _fetch = async () => {
        return {
            ok: true
        }
    }

    // act
    const result = await funFetch('', _fetch)

    // assert
    if (result !== expected) {
        console.log('test_funFetch_ok - failed')
    } else {
        console.log('test_funFetch_ok - passed')
    }
}
test_funFetch_ok()

async function test_funFetch_error() {
    // arrange
    const expected = 'response not found'
    const _fetch = async () => {
        return {
            ok: true
        }
    }

    // act
    const result = await funFetch('', _fetch)

    // assert
    if (result !== expected) {
        console.log('test_funFetch_error - failed')
    } else {
        console.log('test_funFetch_error - passed')
    }
}
test_funFetch_error()


// function createHtmlString(date) {
//     let str = ''
//     for (let key in date) {
//         str += date[key] + '<br>';
//     }
//
//     return str;
// }
// Display the current Date and Time updated every second
// async function cheddar(){
//     const cheese = await funFetch(`http://date.jsontest.com`)
//     console.log(cheese.date)
//     if (cheese){
//         document.getElementById('dateDiv').innerHTML = `${cheese.date} and ${cheese.time}`;
//     } else {
//         document.getElementById('dateDiv').innerHTML = 'unable to find your date and time'
//     }
// }
async function getDate() {
    const cheese = await funFetch(`http://date.jsontest.com`)
    if (cheese) {
        document.getElementById('dateDiv').innerHTML = `${cheese.date} and ${cheese.time}`
    }

}
async function noDate(){
        const sharp = await funFetch(`http://date.jsontest.com`)
    if (!sharp) document.getElementById('dateDiv').innerHTML = 'unable to find your date and time'
}

//testing the date functions
// function test_getDate() {
// //Arrange
//     const _fetch = () => {
//         return {
//             validate:true
//         }
//     }
//     const expected = true
// //Act
//     const result = funFetch(``, _fetch)
// //Assert
//     if (result !== expected){
//         console.log (`test_getDate success - expected: ${expected} -> actual: ${result.validate}`)
//     }
// }
// test_getDate()

//testing the date functions
// function test_noDate() {
// //Arrange
//     const _fetch = () => {
//         return {
//             date:false}
//
//     }
//     const expected = true
// //Act
//     const result = funFetch(``, _fetch)
// //Assert
//     if (result !== expected){
//         console.log (`test_getDate failed - expected: ${expected} -> actual: ${result}`)
//     }
// }
// what i thought to do first but it was only checking if data was retrieved not specifically if properties were validated
// function test_noDate() {
// //Arrange
//     const url = "http://date.jsontest.com"
//     const expected = true
// //Act
//     const result = funFetch(url)
// //Assert
//     if (result !== expected){
//         console.log (`test_getDate failed - expected: ${expected} -> actual: ${result}`)
//     }
// }
// test_noDate()
///Display the HTTP Headers

// async function queso(){
//     const melty = await funFetch(`http://headers.jsontest.com/`)
//     console.log(melty)
//     if (melty){
//         for (let key in melty){
//             document.getElementById(`headerdiv`).innerHTML +=`${key}:${melty[key]}<br>`
//         }
//     }else {
//         document.getElementById(`headerdiv`).innerHTML = `unable to render headers`
//     }
// }

async function getHeader(){
    const melty = await funFetch(`http://headers.jsontest.com/`)
    console.log(melty)
    if (melty){
        for (let key in melty){
            document.getElementById(`headerdiv`).innerHTML +=`${key}:${melty[key]}<br>`
        }
    }
}

async function noHeader() {
    const melty = await funFetch(`http://headers.jsontest.com/`)
    console.log(melty)
    if (!melty) {
        for (let key in melty) {
            document.getElementById(`headerdiv`).innerHTML = `unable to render headers`
        }
    }
}

// function test_getHeader() {
// //Arrange
//     const _fetch = () => {
//         return {
//             Host:true
//         }
//     }
//     const expected = true
// //Act
//     const result = funFetch(`http://headers.jsontest.com/`, _fetch())
// //Assert
//     if (result !== expected){
//         console.log (`test_getHeader success - expected: ${expected} -> actual: ${result.Host}`)
//     }
// }
// test_getHeader()

// function test_noHeader() {
// //Arrange
//     const _fetch = () => {
//         return {
//             host:false
//         }
//     }
//     const expected = true
// //Act
//     const result = funFetch(``, _fetch())
// //Assert
//     if (result !== expected){
//         console.log (`test_getHeader failed - expected: ${expected} -> actual: ${result}`)
//     }
// }
// test_noHeader()
// Display the user’s current public IP address
// async function blue(){
//     const smelly = await funFetch(` http://ip.jsontest.com/`)
//     console.log(smelly)
//     if (smelly){
//         document.getElementById(`userip`).innerHTML = `IP:${smelly.ip}`
//     }else {
//         document.getElementById(`userip`).innerHTML = `unable to render user ip`
//     }
// }
async function getip() {
    const smelly = await funFetch(` http://ip.jsontest.com/`)
    console.log(smelly)
    if (smelly) {
        document.getElementById(`userip`).innerHTML = `IP:${smelly.ip}`
    }
}
async function noIp(){
    const smelly = await funFetch(` http://ip.jsontest.com/`)
    console.log(smelly)
    if (!smelly) {document.getElementById(`userip`).innerHTML = `unable to render user ip`
    }
}

// Allow the user to submit some text, and calculate the MD5 of that text
// async function swiss(){
//     const userPassword = document.getElementById(`passinput`).value
//     const holey = await funFetch(`http://md5.jsontest.com/?text=${userPassword}`)
//     if (holey){
//         console.log(holey)
//     }else {
//         console.log(`unable to retrieve MD5`)
//     }
// }

async function getMd5() {
    const userPassword = document.getElementById(`passinput`).value
    const holey = await funFetch(`http://md5.jsontest.com/?text=${userPassword}`)
    if (holey) {
        console.log(holey)
        document.getElementById(`Md5`).innerHTML = `MD5:${holey.md5}`
    }
}

async function noMd5(){
    const userPassword = document.getElementById(`passinput`).value
    const holey = await funFetch(`http://md5.jsontest.com/?text=${userPassword}`)
    if (!holey){
        console.log(`unable to retrieve MD5`)
    }
}


// Allow the user to submit any text and check to see if it is valid JSON, and inform them what is wrong if it is not valid
// async function guoda(){
//     const obj = document.getElementById(`userobj`).value
//     const tasty = await funFetch(` http://validate.jsontest.com/?json=${obj}`)
//     if (tasty){
//         console.log(tasty)
//     }else {
//         console.log(`unable to validate JSON`)
//     }
// }

async function getJson() {
    const obj = document.getElementById(`userobj`).value
    const tasty = await funFetch(` http://validate.jsontest.com/?json=${obj}`)
    if (tasty) {
        console.log(tasty)
    }
}
async function noJson(){
    const obj = document.getElementById(`userobj`).value
    const tasty = await funFetch(` http://validate.jsontest.com/?json=${obj}`)
    if (!tasty.validate){
        console.log(`unable to validate JSON`)
        document.getElementById(`Json`).innerHTML = `JSON error:${tasty.error}`
    }
}


// async function test_getJson(){
// //Arrange
// const _fetch = () => {
//     return {
//         ok:true
//     }
// }
// const expected = true
// //Act
// const result = await funFetch(``, _fetch)
// //Assert
// if (result !== expected){
//     console.log (`test_getJson failed - expected: ${expected} -> actual: ${result}`)
// }
// }

document.getElementById('form1').addEventListener(`submit`,function(event){
    event.preventDefault()
    getJson()
    noJson()
    getMd5()
    noMd5()
})
console.log(funFetch(`http://date.jsontest.com`));
getDate()
noDate()
getHeader()
noHeader()
getip()
noIp()
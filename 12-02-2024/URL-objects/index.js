let u = new URL('https://javascript.info/admin');
console.log(u.toString())

 let nu = new URL("admin/patrick/",u)
console.log(nu.toString())




let url = u

url.searchParams.set("q","access! token")
url.searchParams.set("v","patrick")

for(let [key,val] of url.searchParams){
    if(key=="v" && val=="patrick"){
        url.searchParams.set("v","lebin")
    }
}

// url = new URL(" https://developer.mozilla.org/docs/JavaScript%3A%20a_scripting_language?q=kuytgbn&p=465")
crypt = encodeURIComponent(url)
console.log( "ENCRYPTION : "+crypt)

crypt = decodeURIComponent(crypt)
console.log( "DECRYPTION : "+crypt)

crypt = encodeURI(crypt)
console.log(crypt)

crypt = decodeURI(crypt)
console.log(crypt)
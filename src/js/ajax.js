export function post(url, data) {

    return new Promise( function(resolve, reject){

        var http = new XMLHttpRequest();
        http.open("POST", url, true);

        //Send the proper header information along with the request
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function () {//Call a function when the state changes.
            if (http.readyState === 4) {
                if (http.status == 200) {
                    resolve(http.responseText);
                } else {
                    reject(Error("can't post data"));
                }
            }
        }
        http.send(data);
    });

}
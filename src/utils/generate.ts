export const generateEmail = ():string => {
	var firstname = generateString(8)
	var lastname = generateString(8)
	return firstname.toLowerCase() + "." + lastname.toLowerCase() + "@example.com"
}

export const generateString = (n:number):string => {
    var value="abcdefghijklmnopqrstuvwxyz123456789";
    var str = "";
    for (var i=0;i<n;i++)
        str = str + value.charAt(Math.round(value.length*Math.random()));;
    return str;
}

export const generateName = (n:number):string => {
    var value="abcdefghijklmnopqrstuvwxyz";
    var str = "";
    for (var i=0;i<n;i++)
        str = str + value.charAt(Math.round(value.length*Math.random()));;
    return str;
}
var merge = function(a,b){
    var i = 1
    console.log(`merge 次数:  ${a}`)
    console.log(`a:  ${a}`)
    console.log(`b:  ${b}`)
    if(a.length<=0){return b}
    if(b.length<=0){return a}
    if(a[0]<b[0]){
        i +=1
        return [a[0]].concat(merge(a.slice(1),b))
    }else{
        i +=1
        return [b[0]].concat(merge(a, b.slice(1)))
    }
}
var sort = function(a){
    if(a.length===1){return a}
    var left = a.slice(0,parseInt(a.length/2))
    var right= a.slice(parseInt(a.length/2))
    console.log(`left:  ${left}`)
    console.log(`right:  ${right}`)
    return merge(left,right)
}

sort([3,2,4,1])
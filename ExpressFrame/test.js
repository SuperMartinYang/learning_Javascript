function afasd(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}
p = 'c d(){a("6:2:3:4:0:3:4:1:e:5:b:1:2:0:5:1:0:2:7:7:0:8:5:9:0:f:4:9:8:3:6:0")}'
a = 16
c = 16
k = '61|38|64|39|30|63|32|65|34|33|eval|62|function|aaa|31|66'.split('|')
e = 0
r = {}

console.log(afasd(p,a,c,k,e,r))
eval(afasd(p,a,c,k,e,r))

aaa()
function refreshTable(){
    $("#logsTable").empty();

    if (localStorage['new_item_coming']  == '1') {
        for(var k in localStorage) {
            if(k.startsWith('item')){
               var item = JSON.parse(localStorage[k])
                var con = td('<span>'+item.series+'</span>') + tda(item.title,item)  + tda(item.next,item)+ tda(item.prev,item)

                $("#logsTable").append(tr(con))
            }
        }
    }

}

function tr(k) {
    return "<tr>" + k + "</tr>"

}

function td(k){
    return "<td>"+ k + "</td>"
}

function goto(k) {
   var route = JSON.parse(k)
    alert(route.fix)
}

function tda(k,item){
    if(k == undefined || k == ''){
        return td('无')
    }
    var route = {}
    route.fix = item.fix_route
    route.series = item.series
    route.current = k
    return td("<a href='#' route='"+ JSON.stringify(route) +"');'>"+ k+ "</a>")
}


refreshTable()

$('td a').bind('click',function () {
    var route = JSON.parse($(this).attr("route"))
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
       chrome.tabs.sendMessage(activeTab.id, {"goto": route});
    });
})

$('td span').bind('click',function () {
    var key =$(this).text()
    delete localStorage['item' + key]
    refreshTable();
})

$('tr a').bind('click',function () {
    var fix = $(this).attr("fix")
    var msg = {"gotoNav": fix};
    chrome.tabs.query({url: 'https://pan.baidu.com/*'}, function (tabs){
       
        var activeTab = tabs[0];

        if(activeTab == undefined){
            chrome.tabs.create( {active: true,url: 'https://pan.baidu.com/mbox/homepage#share/type=session'}, function (tab){
                chrome.tabs.sendMessage(tab.id,msg)
            })
        }else{
            chrome.tabs.update(activeTab.id, {active: true}, function (tab){
                chrome.tabs.sendMessage(tab.id,msg)
            })
        }
        
    });
})


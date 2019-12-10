//custom max min header filter
var minMaxFilterEditor = function(cell, onRendered, success, cancel, editorParams){

    var end;

    var container = document.createElement("span");

    //create and style inputs
    var start = document.createElement("input");
    start.setAttribute("type", "number");
    start.setAttribute("placeholder", "Min");
    start.setAttribute("min", 0);
    start.setAttribute("max", 100);
    start.style.padding = "4px";
    start.style.width = "50%";
    start.style.boxSizing = "border-box";

    start.value = cell.getValue();

    function buildValues(){
        success({
            start:start.value,
            end:end.value,
        });
    }

    function keypress(e){
        if(e.keyCode == 13){
            buildValues();
        }

        if(e.keyCode == 27){
            cancel();
        }
    }

    end = start.cloneNode();

    start.addEventListener("change", buildValues);
    start.addEventListener("blur", buildValues);
    start.addEventListener("keydown", keypress);

    end.addEventListener("change", buildValues);
    end.addEventListener("blur", buildValues);
    end.addEventListener("keydown", keypress);


    container.appendChild(start);
    container.appendChild(end);

    return container;
}

//custom max min filter function
function minMaxFilterFunction(headerValue, rowValue, rowData, filterParams){
    //headerValue - the value of the header filter element
    //rowValue - the value of the column in this row
    //rowData - the data for the row being filtered
    //filterParams - params object passed to the headerFilterFuncParams property

    if(rowValue){
        if(headerValue.start != ""){
            if(headerValue.end != ""){
                return rowValue >= headerValue.start && rowValue <= headerValue.end;
            }else{
                return rowValue >= headerValue.start;
            }
        }else{
            if(headerValue.end != ""){
                return rowValue <= headerValue.end;
            }
        }
    }

    return false; //must return a boolean, true if it passes the filter.
}

var table = new Tabulator("#example-table", {
    layout:"fitData",
    height:"100%",
    movableRows:true,
    layout:"fitColumns",
    pagination:"local",
    paginationSize:15,
    paginationSizeSelector:[30, 60, 90],
    placeholder:"No Data Set",
    columns:[
        {rowHandle:true, formatter:"handle", headerSort:false, frozen:true, width:40, minWidth:40},
        {title:"Product Sku", field:"Product Sku", sorter:"number", headerFilter:"number"},
        {title:"Product Name", field:"Product Name", sorter:"string", headerFilter:"input"},
        {title:"Inventory", field:"Inventory", sorter:"number", headerFilter:"number"},
        {title:"List Price", field:"List Price", sorter:"number", headerFilter:"number"},
    ],
});

//Trigger sort when "Trigger Sort" button is clicked
$("#sort-trigger").click(function(){
    table.setSort($("#sort-field").val(), $("#sort-direction").val());
});

$(document).ready(function(){
    var ajaxConfig = {
        dataType: 'json',
        headers: {
            "X-DreamFactory-Api-Key": config.apiKey
        },
    };

    table.setData(config.url, {}, ajaxConfig);
});


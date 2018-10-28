$("#table").bootstrapTable({
        ajax: function (request) {
            $.ajax({
                type: "GET",
                url: "/table",
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                json: 'callback',
                success: function (json) {
                    var columnsArray = [];
                    columnsArray.push({field: "state", checkbox: true});
                    for (var i = 0; i < (Object.keys(json[0])).length; i++) {//Object.keys(obj) 获取key名称
                        var property = (Object.keys(json[0]))[i];//id   username
                        columnsArray.push({
                            "title": property,
                            "field": property,
                            switchable: true,
                            sortable: true
                        });
                    }

                    $('#table').bootstrapTable('destroy').bootstrapTable({
                        data: json,
                        toolbar: '#toolbar',
                        singleSelect: true,
                        clickToSelect: true,
                        sortName: "create_time",
                        sortOrder: "desc",
                        pageSize: 15,
                        pageNumber: 1,
                        pageList: "[10, 25, 50, 100, All]",
                        showToggle: true,
                        showRefresh: true,
                        showColumns: true,
                        search: true,
                        pagination: true,
                        columns: columnsArray
                    });
                },
                error: function () {
                    alert("错误");
                }
            });
        }
    });
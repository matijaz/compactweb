$(document).ready(function () {
    var inteval = 1000;
    var test = 0;

    loop();

    function loop() {
        getData();
        setTimeout(loop, inteval);
    }

    function getData() {

        $.ajax({
            url: "input.php",
            // data: dataToSend,
            // type: 'post',
            success: function (data) {

                try {
                    var inputData = JSON.parse(data);
                } catch (e) {
                    console.log("Input data malformed");
                    // console.log(e);
                    return;
                }
                console.log("Got new data: "); // + data);
                displayData(inputData);
            },
            error: function (data) {
                console.log("Error: " + data.statusText);
            }
        });
    };

    var test = 1;

    function displayData(input) {
        setTopValues(input);

        //MainValues
        setMainValues(input);

        setIcons(input);

        //  listValues
        setTablesValues(input);

        //BottomValues
        setBottomValues(input);





        scaleValues();

    }

    function setTopValues(input) {
        $("#lblProgram").html(input.LanguageDefinition.lblProgram);
        $("#programNo").html(input.ProgramNo);
        $("#programName").html(input.ProgramName);

        $("#lblStep").html(input.LanguageDefinition.lblStep);
        $("#stepNo").html(input.StepNo);
        $("#stepName").html(input.StepName);
    }

    function setMainValues(input) {
        $("#main1 .actValue").html(input.MainValueList.MainValue1.ActValue);
        $("#main1 .unit").html(input.MainValueList.MainValue1.Unit);
        $("#main1 .nomValue").html(input.MainValueList.MainValue1.NomValue);

        $("#main2 .actValue").html(input.MainValueList.MainValue2.ActValue);
        $("#main2 .unit").html(input.MainValueList.MainValue2.Unit);
        $("#main2 .nomValue").html(input.MainValueList.MainValue2.NomValue);

        $("#main3 .actValue").html(input.MainValueList.MainValue3.ActValue);
        $("#main3 .unit").html(input.MainValueList.MainValue3.Unit);
        $("#main3 .nomValue").html(input.MainValueList.MainValue3.NomValue);

        $("#main4 .actValue").html(input.MainValueList.MainValue4.ActValue);
        $("#main4 .unit").html(input.MainValueList.MainValue4.Unit);
        $("#main4 .nomValue").html(input.MainValueList.MainValue4.NomValue);
    }

    function setIcons(input) {
        var css1 = "",
            css2 = "",
            css3 = "",
            css4 = "";


        if (test < 1000) {
            css1 = "clock";
            css2 = "temp";
            css3 = "fun";
            css3 = "tempopen";
            css4 = "cloud";
        } else {
            css1 = "cloud";
            css2 = "tempopen";
            css3 = "blue";
            css4 = "clock";
        }
        $("#main1 .icon").removeClass().addClass("icon " + css1);
        $("#main2 .icon").removeClass().addClass("icon " + css2);
        $("#main3 .icon").removeClass().addClass("icon " + css3);
        $("#main4 .icon").removeClass().addClass("icon " + css4);
    }

    function setTablesValues(input) {
        //  RelayList Header
        $("#RelayList th:nth-child(1)").html(input.RelayList.Header[0]);
        $("#RelayList th:nth-child(2)").html(input.RelayList.Header[1]);
        $("#RelayList th:nth-child(3)").html(input.RelayList.Header[2]);

        //  RelayList Values
        var relayBody = $("#RelayList tbody"),
            relayList = input.RelayList.Data;
        relayBody.html("");
        var row = "";
        for (var i = 0; i < relayList.length; i++) {
            row = "<tr><td>" + relayList[i][0] + "</td>";
            row += "<td>" + relayList[i][1] + "</td>";
            row += "<td>" + relayList[i][2] + "</td></tr>";
            relayBody.append(row);
        }


        //  StepList Header
        $("#StepList th:nth-child(1)").html(input.StepList.Header[0]);
        $("#StepList th:nth-child(2)").html(input.StepList.Header[1]);

        //  StepList Values
        var stepBody = $("#StepList tbody"),
            stepList = input.StepList.Data;
        stepBody.html("");
        var row = "";
        for (var i = 0; i < stepList.length; i++) {
            row = "<tr><td>" + stepList[i][0] + "</td>";
            row += "<td>" + stepList[i][1] + "</td></tr>";
            stepBody.append(row);
        }
    }

    function setBottomValues(input) {
        $("#statusBarMessage").html(input.StatusBarMessage);
        $("#statusBarTime").html(input.StatusBarTime);

        $("#cmdBottom1").html(input.LanguageDefinition.cmdBottom1);
        $("#cmdBottom4").html(input.LanguageDefinition.cmdBottom4);
        $("#cmdBottom5").html(input.LanguageDefinition.cmdBottom5);
    }


    function scaleValues() {
        //testowo zwiększająca się wartość
        $("#main1 .nomValue").html(test);
        test = test * 10;

        $('.main .nomValue').parent().textfill({
            widthOnly: true,
            maxFontPixels: 42,
            minFontPixels: 20,
            // innerTag: "div",
            success: function () {
                console.log("resize success");
            },
            fail: function () {
                console.log("resize fail");
                test = 1;
            }
        });

        $('.main .unit').parent().textfill({
            widthOnly: true,
            maxFontPixels: 42,
            minFontPixels: 20,
            // innerTag: "div",
            success: function () {
                console.log("resize success");
            },
            fail: function () {
                console.log("resize fail");
                test = 1;
            }
        });
    }


    $('#arrowLeft, #arrowRight').click(function () {
            $('#StepList, #RelayList').toggle();
        }
    );

    //Niepotrzebna funkcja do odliczania czasu - zostawiłem, żeby zapamiętać co napisałem ;)

    // function countTime(input) {
    //     var time = moment({
    //             year: input.WaitYear+2000,
    //             month: input.WaitMonth - 1,
    //             day: input.WaitDay,
    //             hour: input.WaitHour,
    //             minute: input.WaitMinute
    //         });
    //     var diff = moment.duration(moment().diff(time));
    //
    //     var days = Math.floor(diff.asDays()),
    //         hours = diff.hours(),
    //         minutes = diff.minutes(),
    //         seconds = diff.seconds();
    //
    //     $("#time").html(days + ":" + ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2));
    // }

});


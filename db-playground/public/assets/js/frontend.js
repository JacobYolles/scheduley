
$(function () {
    $('#date-input').datepicker();
    $('#submit-date').on('click', function () {
        let date = $('#date-input').val()
        let formattedDate = $.datepicker.formatDate('yy-mm-dd', new Date(date));
        // let formattedDate = console.log(moment(date).format('YYYY-MM-DD'));
        $.get('/api/' + formattedDate, (data => {
            console.log(JSON.stringify(data));
        }))
    })
    $('.service-select').on('click', function() { 
        let serviceSelected = $(this).attr('data-name');
        
        
        $.get('/services/' + serviceSelected, (data => {
            let timesList = $("<ul>");
            $('#available-times').append('<h3>' + 'Available Times' + '</h3>');
            data.forEach(item => {
                let newTime = $("<li>").append(item);
                timesList.append(newTime);
            })
            $('#available-times').append(timesList);
            console.log(data);
        }))
    })
})

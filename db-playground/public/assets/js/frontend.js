
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
    $('#service-select').change(function() {
        let serviceSelected = $('#service-select').val();
        $.get('/services/' + serviceSelected)
        console.log($('#service-select').val());
    })
})

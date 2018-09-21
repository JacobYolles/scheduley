
$(function () {
    let serviceSelected;
    let serviceIdSelected;
    let timeSelected;
    $(document).on('click', '#submit-date', function () {
        $('#date-error').empty();
        $('#available-times').empty().css('color', 'black');
        $('#customer-input').empty().css('border', 'none');
        let date = $('#date-input').val()
        if (!date) {
            $('#date-error').text('Please select a date.').css('color', 'red');
            return;
        }
        let momentDate = moment(date);
        console.log(momentDate);
        $.get('/services/' + serviceSelected, (data => {
            $('#available-times').empty();
            console.log('data', data)
            let timesList = $("<ul>");
            $('#available-times').append('<h4>' + 'Available Times for ' + serviceSelected + '</h4><p>' + moment(date).format('dddd, MMMM Do') + '</p>');
            data.forEach(item => {
                let momentObj = moment(item);
                let formattedTime = moment.tz(item, 'utc').format('h:mm a');
                if (momentObj.isSame(momentDate, 'day')) {
                    let timeBtn = $("<button class='time-select'>").text(formattedTime).attr('data-date', item);
                    let newTime = $("<li>").append(timeBtn);
                    timesList.append(newTime);
                }
            })
            if (timesList.children().length === 0) {
                $('#available-times').text('Sorry, there are no available times for that day. Please select another day.').css('color', 'red');
            }
            $('#available-times').append(timesList);
        }))
    })
    $('.service-select').on('click', function () {
        serviceSelected = $(this).attr('data-name');
        serviceIdSelected = $(this).attr('data-id');
        let dateInputLabel = $("<label for='date-input'>Please select a date:</label>");
        let dateInput = $("<input type='text' name='date-input' id='date-input' />");
        let submitDateBtn = $("<button id='submit-date'>Submit</button>");
        let errorDiv = $("<div id='date-error'></div>")
        $('#date').empty();
        $('#date').append(dateInputLabel, dateInput, submitDateBtn, errorDiv);
        $('#date-input').datepicker();

    });

    $(document).on('click', '.time-select', function () {
        $('#appointment-select').empty();
        timeSelected = $(this).attr('data-date');
        console.log(timeSelected);
        let formattedTime = moment.tz(timeSelected, 'utc').format('dddd, MMMM Do, h:mm a');
        let heading = $('<p>').addClass('input-info').text('Please complete this form to schedule your appointment');
        let reminderSvc = $('<p>').addClass('input-reminder').append("<span style='font-weight:bold'>Service:</span> " + serviceSelected);
        let reminderTime = $('<p>').addClass('input-reminder').append("<span style='font-weight:bold'>Time:</span> " + formattedTime);
        let nameField = $("<input type='text' id='name-input' class='customer-input-field' placeholder='Name (required)'>");
        let phoneField = $("<input type='tel' id='phone-input' class='customer-input-field' placeholder='Phone (required)'>");
        let commentField = $("<textarea id='comment' class='customer-input-field' placeholder='Comment'>");
        let submitInputBtn = $("<button id='submit-input' class='customer-input-field'>Submit</button>");
        let orStartOver = $("<a href='/'>or start over</a>");
        let errorDiv = $("<div>").addClass('error');
        $('#customer-input').css('border', '1px solid #ccc');
        $('#customer-input').append(heading, reminderSvc, reminderTime, nameField, phoneField, commentField, submitInputBtn, orStartOver);
       
        $('#submit-input').on('click', function() {
            let name = nameField.val().trim();
            if (!name) {
                errorDiv.empty();
                errorDiv.text('Please enter your name.')
                $('#customer-input').append(errorDiv);
                return;
            }
            let phone = phoneField.val().trim();
            if (!phone) {
                errorDiv.empty();
                errorDiv.text('Please enter your phone.')
                $('#customer-input').append(errorDiv);
                return;
            }
            let comment = commentField.val().trim();
            postCustomer(name, phone, comment);
            postAppointment(serviceSelected, serviceIdSelected, timeSelected);
            console.log('end of time select');
        })
    })

    $('#set-hours').on('click', function() {
        $.get('/set-hours');
    })

    $('#add-service').on('click', function() {
        $.get('add-service');
    })

    $('#add-service-button').on('click', function() {
        let errorDiv = $("<div>").addClass('error');
        errorDiv.empty();
        let svcName = $('#add-service-name').val().trim();
            if (!svcName) {
                errorDiv.empty();
                errorDiv.text('Please enter a service name.')
                $('#add-service').append(errorDiv);
                return;
            }
        let svcDur = $('#add-service-duration').val().trim();
        let maxSimul = $('#add-service-number').val().trim();
        let serviceData = {
            svcName, 
            svcDur, 
            maxSimul
        }

        $.post('clientaddservice', serviceData).then(response => {
            confirmAddService(response)
        });
    });

    function postCustomer (name, phone, comment) {
        let userData = {
            name, 
            phone, 
            comment
        }

        $.post('/customer', userData)
    }

    function postAppointment (service, serviceId, time) {
        let appointmentData =  {
            service, 
            serviceId,
            time
        }
        $.post('/appointment', appointmentData).then(response => {
            $('#main-input').empty();
            let date = moment.tz(response.start, 'utc').format('dddd, MMMM Do, hh:mm a');
            let event = response.event;
            let thanksMsg = $('<p>').text('Thanks! Your appointment for ' + event + ' has been scheduled for ' + date + '.')
            let scheduleAnother = $("<a href='/'>Schedule another appointment</a>");
            $('#main-input').append(thanksMsg, scheduleAnother);
            console.log(response)
        });
    }

    function confirmAddService(data) {
        console.log(data)
        let name = data.name
        
        $('#add-service').empty();
        let message =$('<p>').text('Service successfully added: ' + name)
        let viewServices = "<a href='/services'>View your currently offered services</a>";
        let addAnotherService = "<p><a href='/addservice'>Add another service</a></p>"
        $('#confirm-add-service').append(message, viewServices, addAnotherService);
    }
})


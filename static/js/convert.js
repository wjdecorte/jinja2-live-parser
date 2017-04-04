$(document).ready(function(){
    $('#clear').click(function() {
        $('#template').val('');
        $('#render').val('');
        $('#values').val('');
        $('#render').html('');
    });

    $('#convert').click(function() {
        var is_checked_showwhitespaces = $('input[name="showwhitespaces"]').is(':checked') ? 1:0;
        var is_checked_dummyvalues = $('input[name="dummyvalues"]').is(':checked') ? 1:0;
        var is_checked_trimblocks = $('input[name="trimblocks"]').is(':checked') ? 1:0;
        var is_checked_lstripblocks = $('input[name="lstripblocks"]').is(':checked') ? 1:0;
        var input_type = $('input[name="input_type"]:checked').val();


        // Push the input to the Jinja2 api (Python)
        $.post('/convert', {
            template: $('#template').val(),
            values: $('#values').val(),
            input_type: input_type,
            showwhitespaces: is_checked_showwhitespaces,
            dummyvalues: is_checked_dummyvalues,
            trimblocks: is_checked_trimblocks,
            lstripblocks: is_checked_lstripblocks
        }).done(function(response) {
            // Grey out the white spaces chars if any
            // Removed since render is now a textarea widget for handling text wrap
            // response = response.replace(/•/g, '<span class="whitespace">•</span>');

            // Display the answer
            $('#render').html(response);
        });
    });
});

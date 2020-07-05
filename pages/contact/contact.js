const check = () => {
    const _email = $("input[name=contact-customer-email]");
    const _name = $("input[name=contact-customer-name]");
    const _body = $("textarea[name=contact-customer-body]");

    if (_email.val() === "") {
        alert("Please input your email");
        _email.trigger('focus');
        return false;
    } else if (_name.val() === "") {
        alert("Please input your name");
        _name.trigger('focus');
        return false;
    } else if (_body.val() === "") {
        alert("Please input your inquery body")
        _body.trigger('focus');
        return false;
    }
    return true;
};

$(document).on('submit', 'form[name=mail_process]', (event) => {
    event.preventDefault();
    const post_data = $('form[name=mail_process]').serialize();
    $.post('http://ync.jupiterflow.com/jquery/sendMail', post_data, (data) => {
        $("form").each(function () {
            if (this.name === "mail_process") this.reset();
        });
        alert("문의 이메일 발송에 성공하였습니다.");
    });
});

function skillsMember()
{
    const member = document.getElementById("member").value;
    const memberError = document.getElementById("memberError");
    const memberRegExp = /^[a-zA-Z0-9]{5,12}$/;
    if(memberRegExp.test(member))
    {
        memberError.innerHTML = "";
        return true;
    }
    else
    {
        memberError.innerHTML = "Member name must be 5-12 characters long";
        return false;
    }
}

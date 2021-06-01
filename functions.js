var access=function (name,role)                  //storing a function inside a variable orelse use function functionName(parameters)
{
    switch(role)
    {
        case "admin":
            {
                return `${name},he can get all access`;
            }
            case "subadmin":
                {
                    return `${name},he can create or delete records`;
                }
                case "testprep":
                    {
                        return `${name},he can create tests or delete`;
                    }
                    case "user":
                        {
                            return `${name},user can access details`;
                        }
                        default:
                            {
                                return `${name},trial user`;
                            }
    }
}

var result=access("Kabil","user");
console.log(result);
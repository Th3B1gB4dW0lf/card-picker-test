using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CardPicker.Services
{
    public class TokenProvider : ITokenProvider
    {
        public string AccessToken { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhotoGalleryApi.Bussines.Dto;
using PhotoGalleryApi.Bussines.Services.Interfaces;
using PhotoGalleryApi.DB.Repositories.Interfaces;

namespace PhotoGalleryApi.Bussines.Services
{
    public class AccountsService : IAccountsService
    {
        private IUnitOfWork uow;
        private Automapper.ObjectMapper objectMapper = Automapper.ObjectMapper.Instance;

        public AccountsService(IUnitOfWork uow)
        {
            this.uow = uow;
        }

        public async Task<AccountDTO> GetAccount(string username)
        {
            var result = await uow.AccountsRepository.GetAllAsync(u => u.Username.Equals(username));
            if (result.Count == 0)
            {
                return null;
            }
            return objectMapper.Mapper.Map<AccountDTO>(result.First());
        }

        public async Task<List<AccountDTO>> GetAllAccounts()
        {
            var result = await uow.AccountsRepository.GetAllAsync();
            return objectMapper.Mapper.Map<List<AccountDTO>>(result);
        }
    }
}

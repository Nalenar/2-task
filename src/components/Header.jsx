const Header = () => {
  return (
    <div className="mx-[150px] mt-[46px] h-[73px] w-auto bg-transparent text-[#E4E5EA] sm:m-0 sm:h-[55px] sm:bg-[#0E1014]">
      <div className="flex h-1/2 w-full items-center bg-transparent font-inter font-medium sm:h-full sm:px-[16px] sm:py-[20px] sm:text-[12px] sm:uppercase">
        <img
          src="/assets/logo_welbex.svg"
          className="mr-[52px] h-[24px] w-[140px] sm:hidden"
        />
        <div className="mr-[137px] inline-flex gap-[30px] sm:mr-0 sm:gap-[16px]">
          <a href="#">Услуги</a>
          <a href="#">Виджеты</a>
          <a href="#">Интеграции</a>
          <a href="#">Кейсы</a>
          <a href="#" className="sm:hidden">
            Сертификаты
          </a>
        </div>
        <div className="ml-auto flex items-center sm:hidden">
          <p className="mr-[47px]">+7 555 555-55-55</p>
          <div className="inline-flex gap-[30px]">
            <a href="#">
              <img src="/assets/telegram.svg" className="h-[20px] w-[20px]" />
            </a>
            <a href="#">
              <img src="/assets/viber.svg" />
            </a>
            <a href="#">
              <img src="/assets/whatsapp.svg" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex h-1/2 w-full items-center bg-transparent sm:hidden">
        <p className="h-[24px] w-[165px] font-montserrat text-[10px] font-light">
          крупный интегратор CRM в Росcии и ещё 8 странах
        </p>
      </div>
    </div>
  );
};

export default Header;

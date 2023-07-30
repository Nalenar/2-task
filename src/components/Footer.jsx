const Footer = () => {
  return (
    <div className="mt-[69px] h-[315px] w-full px-[150px] pt-[55px] sm:mt-[55px] sm:h-auto sm:bg-[#0E1014] sm:px-[15px] sm:pt-[45px]">
      <div className="mr-[98px] inline-flex w-full items-start sm:mb-[50px] sm:mr-0 sm:flex sm:flex-col">
        <div className="mr-[98px] sm:mb-[30px] sm:mr-0">
          <h3 className="m-0 mb-[20px] font-inter text-[14px] font-bold uppercase leading-none tracking-[0.7px] text-[#656566] sm:text-[12px] sm:tracking-[0.6px]">
            О компании
          </h3>
          <div className="flex flex-col gap-[10px]">
            <a href="#" className="font-inter font-normal leading-none">
              Партнёрская программа
            </a>
            <a href="#" className="font-inter font-normal leading-none">
              Вакансии
            </a>
          </div>
        </div>

        <div className="sm:mb-[30px]">
          <h3 className="m-0 mb-[20px] font-inter text-[14px] font-bold uppercase leading-none tracking-[0.7px] text-[#656566] sm:text-[12px] sm:tracking-[0.6px]">
            Меню
          </h3>

          <div className="flex max-h-[140px] flex-col flex-wrap gap-[10px] sm:max-h-[160px]">
            <a
              href="#"
              className="mr-[52px] font-inter font-normal leading-tight sm:w-[75px]"
            >
              Расчёт стоимости
            </a>
            <a href="#" className="font-inter font-normal leading-tight">
              Услуги
            </a>
            <a href="#" className="font-inter font-normal leading-tight">
              Виджеты
            </a>
            <a href="#" className="font-inter font-normal leading-tight">
              Интеграции
            </a>
            <a href="#" className="font-inter font-normal leading-tight">
              Наши клиенты
            </a>
            <a href="#" className="font-inter font-normal leading-tight">
              Кейсы
            </a>
            <a
              href="#"
              className="font-inter font-normal leading-tight sm:w-[123px]"
            >
              Благодарность клиентов
            </a>
            <a href="#" className="font-inter font-normal leading-tight">
              Сертификаты
            </a>
            <a href="#" className="font-inter font-normal leading-tight">
              Блог на Youtube
            </a>
            <a href="#" className="font-inter font-normal leading-tight">
              Вопрос / Ответ
            </a>
          </div>
        </div>

        <div className="ml-auto text-end sm:ml-0 sm:text-start">
          <h3 className="m-0 mb-[20px] font-inter text-[14px] font-bold uppercase leading-none tracking-[0.7px] text-[#656566]">
            Контакты
          </h3>

          <div className="flex flex-col gap-[20px] text-end sm:gap-[10px] sm:text-start">
            <p className="font-inter font-medium leading-none">
              +7 555 555-55-55
            </p>

            <div className="inline-flex justify-end gap-[10px] sm:justify-start">
              <a href="#">
                <img
                  src="/assets/telegram.svg"
                  className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]"
                />
              </a>
              <a href="#">
                <img
                  src="/assets/viber.svg"
                  className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]"
                />
              </a>
              <a href="#">
                <img
                  src="/assets/whatsapp.svg"
                  className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]"
                />
              </a>
            </div>

            <p className="sm:text-14px font-inter font-normal leading-none">
              Москва, Путевой проезд 3с1, к 902
            </p>
          </div>
        </div>
      </div>

      <div className="mb-[20px] mt-[33px] flex flex-col items-end sm:mb-[60px] sm:mt-0 sm:items-start sm:gap-[5px]">
        <p className="font-montserrat text-[12px] font-normal leading-none">
          ©WELBEX 2022. Все права защищены.
        </p>
        <a
          href="#"
          className="font-montserrat text-[12px] underline underline-offset-1"
        >
          Политика конфиденциальности
        </a>
      </div>
    </div>
  );
};

export default Footer;

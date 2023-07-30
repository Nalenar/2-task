const Hero = () => {
  return (
    <div className="mt-[90px] flex w-full bg-transparent px-[150px] sm:mt-[40px] sm:flex-col sm:px-[15px]">
      <div className="w-[362px] sm:w-full">
        <p className="m-0 p-0 font-inter text-[48px] font-normal leading-tight sm:text-[36px]">
          Зарабатывайте больше
        </p>
        <p className="gradient gradient-in-text m-0 p-0 font-inter text-[48px] font-black leading-tight sm:text-[36px]">
          с WELBEX
        </p>
        <p className="mt-[30px] w-[275px] font-montserrat text-[18px] font-normal sm:mt-[15px]">
          Развиваем и контролируем продажи за вас
        </p>
      </div>

      <div className="ml-auto w-[306px] bg-transparent sm:ml-0 sm:mt-[45px] sm:w-[272px]">
        <p className="gradient-2 w-full text-right font-inter text-[18px] font-medium leading-tight sm:text-left">
          Вместе с{" "}
          <span className="gradient-in-text font-bold uppercase tracking-[0.9px] sm:lowercase sm:tracking-normal">
            бесплатной консультацией
          </span>{" "}
          мы дарим:
        </p>

        <div className="mt-[40px] flex flex-wrap sm:hidden">
          <span className="mb-[30px] ml-auto w-[100px] text-right">
            <p className="font-inter text-[18px] font-medium uppercase tracking-[0.9px]">
              Виджеты
            </p>
            <p className="font-montserrat text-[16px] font-normal">
              30 готовых решений
            </p>
          </span>
          <span className="ml-auto w-[135px] text-right">
            <p className="font-inter text-[18px] font-medium uppercase tracking-[0.9px]">
              Dashboard
            </p>
            <p className="font-montserrat text-[16px] font-normal">
              c показателями вашего бизнеса
            </p>
          </span>
          <span className="ml-auto w-[135px] text-right">
            <p className="font-inter text-[18px] font-medium uppercase tracking-[0.9px]">
              Skype Аудит
            </p>
            <p className="font-montserrat text-[16px] font-normal">
              отдела продаж и CRM системы
            </p>
          </span>
          <span className="ml-[36px] w-[135px] text-right">
            <p className="font-inter text-[18px] font-medium uppercase tracking-[0.9px]">
              35 дней
            </p>
            <p className="font-montserrat text-[16px] font-normal">
              использования CRM
            </p>
          </span>

          <a
            href="#"
            className="ml-auto mt-[61px] w-[262px] bg-[#4077F3] py-[21px] pl-[35px] pr-[34px] text-center font-inter font-medium"
          >
            Получить консультацию
          </a>
        </div>

        <div className="mt-[20px] hidden flex-wrap gap-[10px] sm:flex">
          <div className="flex items-center justify-center">
            <span className="gradient-border mr-[5px] h-[1px] w-[10px]" />
            <p className="font-montserrat text-[13px] font-normal uppercase tracking-[0.65px]">
              Skype аудит
            </p>
          </div>
          <div className="flex items-center justify-center">
            <span className="gradient-border mr-[5px] h-[1px] w-[10px]" />
            <p className="font-montserrat text-[13px] font-normal uppercase tracking-[0.65px]">
              30 виджетов
            </p>
          </div>
          <div className="flex items-center justify-center">
            <span className="gradient-border mr-[5px] h-[1px] w-[10px]" />
            <p className="mr-[5px] font-montserrat text-[13px] font-normal uppercase tracking-[0.65px]">
              Dashboard
            </p>
          </div>
          <div className="flex items-center justify-center">
            <span className="gradient-border mr-[5px] h-[1px] w-[10px]" />
            <p className="font-montserrat text-[13px] font-normal uppercase tracking-[0.65px]">
              Месяц аmoCRM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

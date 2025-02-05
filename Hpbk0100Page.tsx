import { Hpbk0100Provider } from '~/entities/hp/hpbk/hpbk0100';
import { SearchForm, BookingList, PageOffCanvas } from '~/widgets/hp/hpbk/hpbk0100';

export const Hpbk0100Page = () => {
  return (
    <Hpbk0100Provider>
      <PageOffCanvas />
      <div>
        <div className="bg-white border-b border-b-gray-150 px-6 py-5 flex flex-col gap-[20px]">
          <div className="flex">
            <h2 className="h2 flex items-center gap-2.5">
              Booking List
              <button
                type="button"
                className="btn btn-light-outline min-w-fit rounded-full flex items-center justify-center size-8 p-0"
                title="Bookmark this page"
              >
                <span className="material-icons-outlined text-1xl">bookmark_add</span>
              </button>
            </h2>
          </div>
          <SearchForm />
        </div>

        <section id="content-area" className="flex flex-col gap-[20px] py-[20px] px-[24px]">
          <BookingList />
        </section>
      </div>
    </Hpbk0100Provider>
  );
};

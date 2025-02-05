import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { useMemo, useRef, useState } from 'react';
import { Navigate as navigate } from 'react-big-calendar';
import { bookingDateList, BookingDateListType } from '~/entities/hp/hpbk/hpbk0200';
import Button from '~/shared/vndev/ui/Button';
import ComAgGrid from '~/shared/vndev/ui/ComAgGrid';
import { ComCommonDialog } from '~/shared/vndev/ui/ComCommonDialog';
import { BodyDialog, FooterDialog } from '~/shared/vndev/ui/Dialog';
import FullCalendar from '~/shared/vndev/ui/FullCalendar';
import Input from '~/shared/vndev/ui/Input';

type AnalysisForRateCodeModalPropsType = {
  open: boolean;
  onClose: () => void;
};

export const AnalysisForRateCodeModal = (props: AnalysisForRateCodeModalPropsType) => {
  const { open, onClose } = props;
  const gridRef = useRef<AgGridReact<any> | null>(null);
  const [rowData] = useState<BookingDateListType[]>(bookingDateList);

  const CustomToolbar = ({ label, localizer: { messages }, onNavigate }) => {
    return (
      <div className="flex flex-wrap items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <button
            className="material-icons text-xl text-secondary"
            aria-label={messages.previous}
            onClick={() => onNavigate(navigate.PREVIOUS)}
          >
            arrow_circle_left
          </button>
          <strong className="text-lg">{label}</strong>
          <button
            className="material-icons text-xl text-secondary"
            aria-label={messages.next}
            onClick={() => onNavigate(navigate.NEXT)}
          >
            arrow_circle_right
          </button>
          <button
            className="btn btn-primary-outline"
            aria-label={messages.today}
            onClick={() => onNavigate(navigate.TODAY)}
          >
            Today
          </button>
        </div>
        <button className="btn btn-primary-outline ms-auto" onClick={() => setOpenNew(true)}>
          New
        </button>
      </div>
    );
  };

  const now = new Date();

  const events = [
    {
      id: 1,
      title: 'Long Event',
      start: new Date(2025, 3, 7),
      end: new Date(2025, 3, 10),
    },

    {
      id: 2,
      title: 'DTS STARTS',
      start: new Date(2025, 2, 13, 0, 0, 0),
      end: new Date(2025, 2, 20, 0, 0, 0),
    },

    {
      id: 3,
      title: 'DTS ENDS',
      start: new Date(2025, 10, 6, 0, 0, 0),
      end: new Date(2025, 10, 13, 0, 0, 0),
    },

    {
      id: 4,
      title: 'Some Event',
      start: new Date(2025, 3, 9, 0, 0, 0),
      end: new Date(2025, 3, 9, 0, 0, 0),
      allDay: true,
    },

    {
      id: 92,
      title: 'Some Other Event',
      start: new Date(2025, 3, 9, 8, 0, 0),
      end: new Date(2025, 3, 10, 11, 30, 0),
    },
    {
      id: 5,
      title: 'Conference',
      start: new Date(2025, 3, 11),
      end: new Date(2025, 3, 13),
      desc: 'Big conference for important people',
    },
    {
      id: 6,
      title: 'Meeting',
      start: new Date(2025, 3, 12, 10, 30, 0, 0),
      end: new Date(2025, 3, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
      id: 7,
      title: 'Lunch',
      start: new Date(2025, 3, 12, 12, 0, 0, 0),
      end: new Date(2025, 3, 12, 13, 0, 0, 0),
      desc: 'Power lunch',
    },
    {
      id: 8,
      title: 'Meeting',
      start: new Date(2025, 3, 12, 14, 0, 0, 0),
      end: new Date(2025, 3, 12, 15, 0, 0, 0),
    },
    {
      id: 9,
      title: 'Happy Hour',
      start: new Date(2025, 3, 12, 17, 0, 0, 0),
      end: new Date(2025, 3, 12, 17, 30, 0, 0),
      desc: 'Most important meal of the day',
    },
    {
      id: 10,
      title: 'Dinner',
      start: new Date(2025, 3, 12, 20, 0, 0, 0),
      end: new Date(2025, 3, 12, 21, 0, 0, 0),
    },
    {
      id: 11,
      title: 'Planning Meeting with Paige',
      start: new Date(2025, 3, 13, 8, 0, 0),
      end: new Date(2025, 3, 13, 10, 30, 0),
    },
    {
      id: 11.1,
      title: 'Inconvenient Conference Call',
      start: new Date(2025, 3, 13, 9, 30, 0),
      end: new Date(2025, 3, 13, 12, 0, 0),
    },
    {
      id: 11.2,
      title: "Project Kickoff - Lou's Shoes",
      start: new Date(2025, 3, 13, 11, 30, 0),
      end: new Date(2025, 3, 13, 14, 0, 0),
    },
    {
      id: 11.3,
      title: 'Quote Follow-up - Tea by Tina',
      start: new Date(2025, 3, 13, 15, 30, 0),
      end: new Date(2025, 3, 13, 16, 0, 0),
    },
    {
      id: 12,
      title: 'Late Night Event',
      start: new Date(2025, 3, 17, 19, 30, 0),
      end: new Date(2025, 3, 18, 2, 0, 0),
    },
    {
      id: 12.5,
      title: 'Late Same Night Event',
      start: new Date(2025, 3, 17, 19, 30, 0),
      end: new Date(2025, 3, 17, 23, 30, 0),
    },
    {
      id: 13,
      title: 'Multi-day Event',
      start: new Date(2025, 3, 20, 19, 30, 0),
      end: new Date(2025, 3, 22, 2, 0, 0),
    },
    {
      id: 14,
      title: 'Today',
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
    {
      id: 15,
      title: 'Point in Time Event',
      start: now,
      end: now,
    },
    {
      id: 16,
      title: 'Video Record',
      start: new Date(2025, 3, 14, 15, 30, 0),
      end: new Date(2025, 3, 14, 19, 0, 0),
    },
    {
      id: 17,
      title: 'Dutch Song Producing',
      start: new Date(2025, 3, 14, 16, 30, 0),
      end: new Date(2025, 3, 14, 20, 0, 0),
    },
    {
      id: 18,
      title: 'Itaewon Meeting',
      start: new Date(2025, 3, 14, 16, 30, 0),
      end: new Date(2025, 3, 14, 17, 30, 0),
    },
    {
      id: 19,
      title: 'Online Coding Test',
      start: new Date(2025, 3, 14, 17, 30, 0),
      end: new Date(2025, 3, 14, 20, 30, 0),
    },
    {
      id: 20,
      title: 'An overlapped Event',
      start: new Date(2025, 3, 14, 17, 0, 0),
      end: new Date(2025, 3, 14, 18, 30, 0),
    },
    {
      id: 21,
      title: 'Phone Interview',
      start: new Date(2025, 3, 14, 17, 0, 0),
      end: new Date(2025, 3, 14, 18, 30, 0),
    },
    {
      id: 22,
      title: 'Cooking Class',
      start: new Date(2025, 3, 14, 17, 30, 0),
      end: new Date(2025, 3, 14, 19, 0, 0),
    },
    {
      id: 23,
      title: 'Go to the gym',
      start: new Date(2025, 3, 14, 18, 30, 0),
      end: new Date(2025, 3, 14, 20, 0, 0),
    },
    {
      id: 24,
      title: 'DST ends on this day (Europe)',
      start: new Date(2022, 9, 30, 0, 0, 0),
      end: new Date(2022, 9, 30, 4, 30, 0),
    },
    {
      id: 25,
      title: 'DST ends on this day (America)',
      start: new Date(2022, 10, 6, 0, 0, 0),
      end: new Date(2022, 10, 6, 4, 30, 0),
    },
    {
      id: 26,
      title: 'DST starts on this day (America)',
      start: new Date(2025, 2, 12, 0, 0, 0),
      end: new Date(2025, 2, 12, 4, 30, 0),
    },
    {
      id: 27,
      title: 'DST starts on this day (Europe)',
      start: new Date(2025, 2, 26, 0, 0, 0),
      end: new Date(2025, 2, 26, 4, 30, 0),
    },
  ];

  const columnDefs = useMemo<ColDef<BookingDateListType>[]>(() => [
    {
      flex: 1,
      headerName: 'Date',
      field: 'date',
      cellStyle: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
      },
    },
    {
      flex: 1,
      headerName: 'Open/Close',
      field: 'openClose',
      cellStyle: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
      },
    },
  ]);

  const defaultColDef = {
    suppressMovable: true,
    suppressHeaderMenuButton: true,
    suppressClickEdit: true,
    editable: true,
    headerClass: '[&_.ag-header-cell-label]:justify-center',
  };

  return (
    <ComCommonDialog
      open={open}
      onClose={onClose}
      title="Analysis for Rate Code"
      contentProps={{
        className: 'w-[1200px]',
      }}
    >
      <BodyDialog>
        <div className=" flex items-center  mb-5 gap-2">
          <div className="flex items-center">
            <h3 className="w-30">Rate Code</h3>
            <Input value="blaiohk" disabled type="text" />
          </div>
          <div className="flex items-center">
            <h3>Nights : </h3>
            <h3>1</h3>
          </div>
        </div>
        <div className=" border-b h-1" />
        <div className=" w-full flex justify-evenly gap-5 py-5 ">
          <div className=" w-[45%]">
            <ComAgGrid
              ref={gridRef}
              rowHeight={45}
              headerHeight={40}
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
            />
          </div>
          <div className="w-[2px] border border-gray-300" />
          <div className=" w-[45%] h-[300px]">
            <FullCalendar
              toolbar={CustomToolbar}
              events={events}
              startAccessor="start"
              endAccessor="end"
              // style={{ height: 300 }}
              open={['green']}
              close={['gray']}
              restriction={['red']}
            />
          </div>
        </div>
      </BodyDialog>
      <FooterDialog className="border-t border-gray-200 mt-5">
        <Button label="Cancel" variant="outlined" size="small" onClick={onClose} />
      </FooterDialog>
    </ComCommonDialog>
  );
};

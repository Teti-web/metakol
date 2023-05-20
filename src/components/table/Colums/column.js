import { format } from 'date-fns'

export const COLUMNS = [
    {
      Header: 'Name / parameters guaranteed',
      accessor: 'name',
      sticky: 'left'
    },
    {
      Header: 'Wrt, max. %',
      accessor: 'data1',
    },
    {
      Header: 'Sd, max. %',
      accessor: 'data2'
    },
    {
        Header: 'Ad, max. %',
        accessor: 'data3'
    },
    {
        Header: 'Qri, min. %',
        accessor: 'data4'
    },
    {
        Header: 'Vdaf, max. %',
        accessor: 'data5'
    }

  ]
  
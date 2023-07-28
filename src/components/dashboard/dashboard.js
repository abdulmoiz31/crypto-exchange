import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromServer } from '../../actions/blogsApiActions';
import { fetchRatesFromServer } from '../../actions/blogsApiActions';
import { setCoin } from '../../actions/coinTransferActions';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Dashboard = ({token}) => {

    const columns = [
        
        { id: 'purchasedCoin', label: 'Purchased Coin', minWidth: 100 ,align: 'center',},
        {
          id: 'liveRate',
          label: 'Live Rate',
          minWidth: 170,
          align: 'center',
        },
        {
          id: 'action',
          label: 'Action',
          minWidth: 170,
          align: 'center',
          type: 'button'
        }
      ];

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.data);

    const { rates, loadingRates, errorRates } = useSelector((state) => state.rates);
    console.log(rates);
    console.log(Array.isArray(data));
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(fetchDataFromServer());
        dispatch(fetchRatesFromServer());
        
      }, [dispatch]);

      const handleTransferClick = (coin) => {
        
        dispatch(setCoin(coin))
        navigate('/dashboard/transfer')
      }

        if (loading || loadingRates) {
            return <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>;
        }
        
        if (error || errorRates) {
            return <div>Error: {error}</div>;
        }
        console.log(data);
        return (
            <div>
            <h4>Crypto Exchange Dashboard</h4>
            <Paper className='p-2' sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 612 }}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((row) => {
                        return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row}>
                            {columns.map((column) => {
                            const value = row;
                            if (column.id == 'liveRate') {
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                    {rates[row] ? rates[row] : 0}
                                    </TableCell>
                                );  
                            }
                            return (
                                <TableCell key={column.id} align={column.align}>
                                {column.type === 'button'
                                    ? <div><button type="button" className="btn btn-outline-success" onClick={()=> handleTransferClick(row)}>Transfer</button></div>
                                    : value}
                                </TableCell>
                            );
                            })}
                        </TableRow>
                        );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            </Paper>
            </div>
        )
}

const mapStateToProps = (state) => {

    return {
      token: state.token.token,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
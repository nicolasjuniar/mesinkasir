import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import cari_logo from '../images/search.png'

class Halaman extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar color="light" light expand="md" style={{ backgroundColor: 'blue' }}>
                        <NavbarBrand style={{ marginRight: 40 }}> CBX SWALAYAN </NavbarBrand>
                        <Nav className="mr-auto" navbar>
                            <NavItem style={{ marginRight: 40 }}>Anda login sebagai administrator</NavItem>
                            <NavItem style={{ marginRight: 40 }}>Penjualan</NavItem>
                            <NavItem>Laporan</NavItem>
                        </Nav>
                        
                    </Navbar>



                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    marginTop: 20,
                    width: 1550,
                    height: 430,
                    backgroundColor: 'white',
                }}>
                    <div style={{
                        width: 800,
                        height: 400,
                        backgroundColor: 'white'
                    }}>
                        <form style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                        }}>
                            <p>ID BARANG :</p>
                            <input type="text" placeholder="B001" style={{
                                width: 500,
                                height: 35,
                                marginLeft: 30
                            }} />
                            <button style={{ marginLeft: 64, height: 35, backgroundColor: '#3fc5f0' }}>
                                <img src={cari_logo} style={{ height: 20, width: 20 }} />
                            </button>
                        </form>
                        <form style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            marginTop: 15
                        }}>
                            <p>NAMA BARANG :</p>
                            <input type="text" placeholder="Kecap" style={{
                                width: 600,
                                height: 35,
                                marginLeft: 30
                            }} />
                        </form >
                        <form style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            marginTop: 15
                        }}>
                            <p>HARGA BARANG :</p>
                            <input type="text" placeholder="0" style={{
                                width: 600,
                                height: 35,
                                marginLeft: 30
                            }} />
                        </form>
                        <form style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            marginTop: 15
                        }}>
                            <p>JUMLAH :</p>
                            <input type="text" placeholder="0" style={{
                                width: 600,
                                height: 35,
                                marginLeft: 30
                            }} />
                        </form>
                        <form style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            marginTop: 15
                        }}>
                            <p>SUB TOTAL :</p>
                            <input type="text" placeholder="0" style={{
                                width: 600,
                                height: 35,
                                marginLeft: 30
                            }} />
                        </form>
                        <button style={{
                            marginTop: 30,
                            marginLeft: 500,
                            backgroundColor: '#3fc5f0'
                        }}>Tambah</button>
                    </div>

                    <div style={{
                        width: 600,
                        height: 400,
                        marginLeft: 100,
                        backgroundColor: 'white'
                    }}>
                        <form>
                            <p style={{ fontSize: 30 }}>TOTAL :</p>
                            <input type="text" placeholder="0" style={{
                                width: 300,
                                height: 50
                            }} />
                        </form>
                        <form>
                            <p style={{ fontSize: 30, marginTop: 10 }}>BAYAR :</p>
                            <input type="text" placeholder="0" style={{
                                width: 300,
                                height: 50
                            }} />
                        </form>
                        <form>
                            <p style={{ fontSize: 30, marginTop: 10 }}>KEMBALI :</p>
                            <input type="text" placeholder="0" style={{
                                width: 300,
                                height: 50
                            }} />
                        </form>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <table border="3px" width="1500">
                        <tbody>
                            <tr>
                                <td>No</td>
                                <td>Nama Barang</td>
                                <td>Harga Barang</td>
                                <td>Jumlah</td>
                                <td>Sub Total</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div>

                </div>
            </div >
        );
    }
}

export default Halaman;
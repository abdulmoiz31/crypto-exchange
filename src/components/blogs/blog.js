import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ToastContainer, toast } from 'react-toastify';
import { addBlog, updateBlog, deleteBlog } from '../../actions/blogActions';
import { useSelector, useDispatch } from 'react-redux';

const columns = [
  { id: 'id', label: 'Blog ID', minWidth: 170 ,align: 'center',},
  { id: 'title', label: 'Title', minWidth: 100 ,align: 'center',},
  {
    id: 'subtitle',
    label: 'Subtitle',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'author',
    label: 'Author',
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

function createData(id, title, subtitle, author) {
  
  return { id, title, subtitle, author };
}

const rows = [
  
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Blog() {
  const [viewBlog, setViewBlog] = React.useState({});
  const [editBlog, setEditBlog] = React.useState({id: '', title: '', author: '', subtitle: ''});
  const [addBlogForm, setAddBlog] = React.useState({id: '', title: '', author: '', subtitle: ''});

  const handleViewClick = (blog) => {
    setViewBlog(blog)
    handleOpenView()
    console.log(blog);
  }

  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);
  console.log(Array.isArray(blogs));
  

  const handleAddBlog = (newBlog) => {
    dispatch(addBlog(newBlog));
  };

  const handleUpdateBlog = (id, updatedBlog) => {
    dispatch(updateBlog(id, updatedBlog));
  };

  const handleDeleteBlog = (id) => {
    dispatch(deleteBlog(id));
  };

  const handleEditClick = (blog) => {
    setEditBlog(blog);
    handleOpenEdit()
    console.log(blog);
  }

  const handleDeleteClick = (blog) => {
    
    var blogIndex = blogs.findIndex((item => item.id == blog.id));
    if (blogIndex > -1) {
//      var updatedBlogs = blogs.filter((_, i) => i !== blogIndex);
      handleDeleteBlog(blog.id);
  //    setBlogs(updatedBlogs);
      showToast("Blog Deleted Successfully", true)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    //var updatedEditBlog = editBlog;
    const newData = editBlog;
    newData[name] = value;
    setEditBlog({...editBlog, [name] : value});
    console.log(editBlog);
  };

  const handleChangeAdd = (event) => {
    const { name, value } = event.target;
    //var updatedEditBlog = editBlog;
    
    setAddBlog({...addBlogForm, [name] : value});
    console.log(addBlogForm);
  };

  const [openView, setOpenView] = React.useState(false);
  const handleOpenView = () => setOpenView(true);
  const handleCloseView = () => setOpenView(false);

  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Handle form submission here, you can access form values from this.state

    var blogIndex = blogs.findIndex((blog => blog.id == editBlog.id));
    if (blogIndex !== -1) {
        handleUpdateBlog(editBlog.id, editBlog)
        showToast("Blog Updated Successfully", true)
        handleCloseEdit()
    }else {
      showToast("Invalid Blog ID", false)
    }
  };

  const handleSubmitAdd = (event) => {
    event.preventDefault();
    
    // Handle form submission here, you can access form values from this.state

    var blogIndex = blogs.findIndex((blog => blog.id == addBlogForm.id));
    if (blogIndex == -1) {
        // var updatedBlogs = blogs;
        // updatedBlogs.push(addBlog);
        handleAddBlog(addBlogForm);
        //setBlogs(updatedBlogs);
        showToast("Blog Added Successfully", true)
        handleCloseAdd()
    }else {
      showToast("Blog with same ID already exists", false)
    }
  };

  const showToast = (message, success) => {
    if (success) {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }

  return (
    <div>
    <div className='d-flex flex-row-reverse'><button type="button" onClick={handleOpenAdd} className="btn btn-outline-primary mr-5">Add Blog</button></div>
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
            {blogs
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.type === 'button'
                            ? <div><button type="button" className="btn btn-outline-primary" onClick={()=> handleViewClick(row)}>View</button><button type="button" className="btn btn-outline-success" onClick={()=> handleEditClick(row)}>Edit</button><button type="button" className="btn btn-outline-danger" onClick={()=> handleDeleteClick(row)}>Delete</button></div>
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
      {/* <TablePagination
        rowsPerPageOptions={[10, 20, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
    <Modal
      open={openView}
      onClose={handleCloseView}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {viewBlog.title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div>
            <p>Subtitle: {viewBlog.subtitle}</p>
            <p>Author: {viewBlog.author}</p>
          </div>
        </Typography>
      </Box>
    </Modal>
    <Modal
      open={openEdit}
      onClose={handleCloseEdit}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {editBlog.title}
        </Typography>
        <div id="modal-modal-description" sx={{ mt: 2 }}>
        <div className='mt-4'>
        <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
            <label className="form-label" htmlFor="editId">Blog ID</label>
            <input type="text" className="form-control" name="id" id="editId" value={editBlog.id} placeholder="Enter Blog ID" readOnly/>
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="editTitle">Title</label>
            <input type="text" className="form-control" name="title" id="editTitle" value={editBlog.title} onChange={handleChange} placeholder="Enter Blog Title" required/>
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="editSubTitle">Subtitle</label>
            <input type="text" className="form-control" name="subtitle" id="editSubTitle" value={editBlog.subtitle} onChange={handleChange} placeholder="Enter Blog Subtitle" required/>
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="editAuthor">Author</label>
            <input type="text" className="form-control" name="author" id="editAuthor" value={editBlog.author} onChange={handleChange} placeholder="Enter Blog Author" required/>
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
        </div>
        </div>
      </Box>
    </Modal>
    <Modal
      open={openAdd}
      onClose={handleCloseAdd}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add Blog
        </Typography>
        <div id="modal-modal-description" sx={{ mt: 2 }}>
        <div className='mt-4'>
        <form onSubmit={handleSubmitAdd}>
        <div className="form-group mb-3">
            <label className="form-label" htmlFor="editId">Blog ID</label>
            <input type="text" className="form-control" name="id" id="editId" value={addBlogForm.id} onChange={handleChangeAdd} placeholder="Enter Blog ID" required/>
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="editTitle">Title</label>
            <input type="text" className="form-control" name="title" id="editTitle" value={addBlogForm.title} onChange={handleChangeAdd} placeholder="Enter Blog Title" required/>
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="editSubTitle">Subtitle</label>
            <input type="text" className="form-control" name="subtitle" id="editSubTitle" value={addBlogForm.subtitle} onChange={handleChangeAdd} placeholder="Enter Blog Subtitle" required/>
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="editAuthor">Author</label>
            <input type="text" className="form-control" name="author" id="editAuthor" value={addBlogForm.author} onChange={handleChangeAdd} placeholder="Enter Blog Author" required/>
          </div>
          <button type="submit" className="btn btn-primary">Add Blog</button>
        </form>
        </div>
        </div>
      </Box>
    </Modal>
    <ToastContainer />
    </div>
  );
}

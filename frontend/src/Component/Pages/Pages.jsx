import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Typography, IconButton, Alert, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import './Pages.css'

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        const response = await axios.get("http://localhost/reactcrudphp/aczone/api/product.php");
        setProjects(response.data);
    }

    const handleDelete = async (p_id) => {
        const response = await axios.delete(`http://localhost/reactcrudphp/aczone/api/product.php/${p_id}`);
        if (response.data.success) {
            setMessage(response.data.success);
            fetchProjects();
        }
    }

    const handleCloseAlert = () => {
        setMessage('');
    }
    const handleLogout = () => {
        // Remove authentication state
        localStorage.removeItem('isAuthenticated');
        // Redirect to login page
        window.location.href = '/auth';
    };
    return (
        <React.Fragment>
            <div className="container">
                <div class="container">

                    <div class="row">
                        <div class="col">
                            <div className="buttomsignadd btn fw-bold">
                                <Link to="/Ajouter" className="navbar-brand na">Ajouter</Link>
                            </div>
                        </div>
                        <div class="col">

                        </div>
                        <div class="col">

                        </div><div class="col">

                        </div><div class="col">

                        </div>
                        <div class="col">
                            <button className="buttomsignadd btn fw-bold na" onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
                <Typography variant="h4">Liste des projets</Typography>
                {message && (
                    <Alert
                        severity="success"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={handleCloseAlert}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        {message}
                    </Alert>
                )}
                {projects.length > 0 ? (
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Lieu</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Déscription</TableCell>
                                    <TableCell>Photo</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {projects.map(project => (
                                    <TableRow key={project.id}>
                                        <TableCell>{project.ptitle}</TableCell>
                                        <TableCell>{project.pprice}</TableCell>
                                        <TableCell>{project.pstockinitiale}</TableCell>
                                        <TableCell>
                                            <img src={`http://localhost/reactcrudphp/aczone/images/${project.pfile}`} alt={project.pfile} style={{ maxWidth: '100px' }} />
                                        </TableCell>

                                        <TableCell>
                                            <Button variant="contained" color="secondary" onClick={() => handleDelete(project.p_id)}>
                                                Supprimer
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <Typography variant="h6">Aucun projet disponible.</Typography>
                )}
            </div>
        </React.Fragment>
    );
}

export default ProjectList;
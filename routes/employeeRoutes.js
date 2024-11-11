const express = require('express');
const { db } = require('../config/firebaseConfig');
const router = express.Router();

// Add Employee
router.post('/', async (req, res) => {
  const { name, surname, age, idNumber, role, photo } = req.body;
  try {
    const docRef = await db.collection('employees').add({
      name,
      surname,
      age,
      idNumber,
      role,
      photo, // Save base64 photo directly in Firestore
    });

    res.status(201).json({ message: 'Employee added successfully', id: docRef.id });
  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(500).json({ message: 'Failed to add employee', error: error.message });
  }
});

// Update Employee
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, surname, age, idNumber, role, photo } = req.body;

  try {
    // Update employee data in Firestore
    await db.collection('employees').doc(id).update({
      name,
      surname,
      age,
      idNumber,
      role,
      photo,
    });

    res.json({ message: 'Employee updated successfully' });
  } catch (error) {
    console.error('Error updating employee:', error);
    res.status(500).json({ message: 'Failed to update employee', error: error.message });
  }
});

// Delete Employee
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Delete employee data from Firestore
    await db.collection('employees').doc(id).delete();
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ message: 'Failed to delete employee', error: error.message });
  }
});

module.exports = router;

import moment from "moment-timezone";

const usersTemp = [
  {
    "userNumber": 1,
    "status": "Active",
    "fullName": "John Doe",
    "role": "Driver",
    "shiftNumber": "55",
    "lastUpdated": moment().subtract(1, "days").format("DD MMM YYYY"),
  },
  {
    "userNumber": 2,
    "status": "Inactive",
    "fullName": "Jane Smith",
    "role": "Yard Operator",
    "shiftNumber": "--",
    "lastUpdated": moment().subtract(3, "days").format("DD MMM YYYY"),
  },
  {
    "userNumber": 3,
    "status": "Terminated",
    "fullName": "Alex Johnson",
    "role": "Admin",
    "shiftNumber": "--",
    "lastUpdated": moment().subtract(5, "days").format("DD MMM YYYY"),
  },
  {
    "userNumber": 4,
    "status": "Active",
    "fullName": "Sarah Williams",
    "role": "Driver",
    "shiftNumber": "19",
    "lastUpdated": moment().subtract(2, "days").format("DD MMM YYYY"),
  },
  {
    "userNumber": 5,
    "status": "Active",
    "fullName": "Michael Brown",
    "role": "Admin",
    "shiftNumber": "--",
    "lastUpdated": moment().subtract(4, "days").format("DD MMM YYYY"),
  },
  {
    "userNumber": 6,
    "status": "Terminated",
    "fullName": "Emily Davis",
    "role": "Driver",
    "shiftNumber": "16",
    "lastUpdated": moment().subtract(6, "days").format("DD MMM YYYY"),
  },
  {
    "userNumber": 7,
    "status": "Inactive",
    "fullName": "David Wilson",
    "role": "Yard Operator",
    "shiftNumber": "--",
    "lastUpdated": moment().subtract(1, "days").format("DD MMM YYYY"),
  },
  {
    "userNumber": 8,
    "status": "Active",
    "fullName": "Olivia Thompson",
    "role": "Admin",
    "shiftNumber": "--",
    "lastUpdated": moment().subtract(3, "days").format("DD MMM YYYY"),
  },
  {
    "userNumber": 9,
    "status": "Inactive",
    "fullName": "Riley Day",
    "role": "Driver",
    "shiftNumber": "14",
    "lastUpdated": moment().subtract(1, "days").format("DD MMM YYYY"),
  },
  {
    "userNumber": 10,
    "status": "Active",
    "fullName": "Rod Wave",
    "role": "Admin",
    "shiftNumber": "--",
    "lastUpdated": moment().subtract(3, "days").format("DD MMM YYYY"),
  },
];

export default usersTemp;
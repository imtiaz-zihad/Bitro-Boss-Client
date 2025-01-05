import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../assets/hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text:    `${user.name} has been deleted`,
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/admin/${user._id}`)
      .then((res) => {
        refetch();
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text:   `${user.name} is now an admin`,
            icon: "success",
          });
            
        }
       
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong",
          icon: "error",
        });
      });
  };
  return (
    <div>
      <div className="flex justify-evenly my-4 ">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <td>{idx + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                 {user.role === 'admin' ?"Admin ": <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-ghost btn-xs text-2xl  text-orange-600"
                  >
                    <FaUsers />
                  </button>}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-xs text-2xl text-red-600 "
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

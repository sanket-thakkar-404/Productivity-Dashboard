const TaskMenuItem = ({ onPin, onEdit, onDelete }) => {
  return (
    <div className="absolute top-14 right-0 bg-black text-white rounded-xl w-36 p-2 z-20">
      
      <button
        onClick={onPin}
        className="w-full rounded-2xl flex items-center gap-2 px-3 py-2 hover:bg-gray-700"
      >
        <i className="ri-pushpin-line"></i> Pin
      </button>

      <button
        onClick={onEdit}
        className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-700 rounded"
      >
        <i className="ri-pencil-line"></i> Edit
      </button>

      <button
        onClick={onDelete}
        className="w-full flex items-center gap-2 px-3 py-2 hover:bg-red-600 rounded"
      >
        <i className="ri-delete-bin-line"></i> Delete
      </button>
    </div>
  );
};

export default TaskMenuItem;
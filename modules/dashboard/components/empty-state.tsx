import React from 'react'

const EmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16">
            <img src="empty-state.svg" alt="No projects found" className="w-48 h-48 mb-4" />
            <h1 className="text-xl font-semibold text-gray-500">No projects found</h1>
            <p className=" text-gray-400">Create a new started!</p>
        </div>
    )
}

export default EmptyState
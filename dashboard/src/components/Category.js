import React from 'react';

function Category({children}) {
    return (
        <div className="card bg-info text-white shadow">
			<div className="card-body">
				{children}
			</div>
        </div>
    );
}

export default Category;
import { Link } from 'react-router-dom';
import { BreadcrumbType } from '../Type/BreadcrumbsType';

const Breadcrumb = ({ breadcrumbs } : BreadcrumbType) => {

  return (
    <div className="ml-5 flex flex-row gap-1 mb-3 ">
      {breadcrumbs.map((item, index) => {
        return (
          <span key={`breadcrumb-${index}`} className="font-bold text-xs">
            <Link
              to={index === breadcrumbs.length - 1 ? '#' : item.path}
              className={`${index !== breadcrumbs.length - 1 ? 'text-blue-500' : 'text-neutral-700'}`}>
              {item.label}
            </Link>
            <span className={`${index !== breadcrumbs.length - 1 ? 'text-blue-500' : ''}`}>
              {index !== breadcrumbs.length - 1 ? ' >' : ''}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
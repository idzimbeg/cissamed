import clsx from 'clsx';

type HeaderTitleProps = {
  title?: never;
  description?: never | undefined | string;
  children?: React.ReactNode;
  img?: unknown;
  bg?: unknown;
} & JSX.IntrinsicElements['div'];

export const HeaderTitleLayout = ({
  img,
  title,
  description,
  bg,
  children,
  className: propClassName = '',
}: HeaderTitleProps) => {
  const className = clsx('justify-center items-center text-base', propClassName);
  return (
    <div className={className}>
      <div className="bg-primary-light pb-16 border-none">
        <header className="pt-2 mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-end mb-3 h-32">
              <h3 className="mb-1 md:text-2xl font-semibold text-secondary-main">{title}</h3>
              <div className="mb-1">
                <>{bg}</>
              </div>
              <>{img}</>
              {description && (
                <p className="lg:mx-56 tracking-wide justify-center md:text-xl text-primary-main text-center xs:my-32">
                  {description}
                </p>
              )}
            </div>
          </div>
        </header>
      </div>
      <main>
        <div className="min-h-full">
          <div className="max-w-6xl mx-auto pb-12 px-2 sm:px-6 lg:px-8">
            <div className="mb-5 px-5 py-14 sm:px-6 text-primary-light text-md font-karla">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

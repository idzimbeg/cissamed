import clsx from 'clsx';

type HeaderTitleProps = {
  title?: never;
  description?: never | undefined | string;
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bg?: any;
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
      <div className="bg-primary-light">
        <header className=" mb-8">
          <div className="mx-auto my-5px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-end mb-3 h-32">
              <h3 className="mb-1 md:text-2xl font-semibold text-secondary-main invisible lg:visible ...">{title}</h3>
              <div className="mb-1">
                <div className="invisible lg:visible ...">{bg}</div>
              </div>
              <>{img}</>
              {description && (
                <p className="lg:mx-56 tracking-wide justify-center md:text-xl text-secondary-main text-center xs:my-32">
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

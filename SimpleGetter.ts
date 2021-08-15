export default abstract class SimpleGetter<K>
{
    public abstract get value() : K;
    public abstract set value(v : K);
}
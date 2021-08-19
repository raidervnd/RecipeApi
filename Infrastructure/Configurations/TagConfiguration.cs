using Application.Recipe;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configurations
{
    public class TagConfiguration : IEntityTypeConfiguration<Tag>
    {
        public void Configure(EntityTypeBuilder<Tag> builder)
        {
            builder.ToTable(nameof(Tag)).HasKey(t => t.Id);
            builder
                .HasOne(s => s.Recipe)
                .WithMany(r => r.Tags)
                .HasForeignKey(s => s.RecipeId);
        }
    }
}
